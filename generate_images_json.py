#!/usr/bin/env python3

from __future__ import annotations

import argparse
import json
from pathlib import Path


DEFAULT_EXTENSIONS = {
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".webp",
}

ROOT_CATEGORY_ALIASES = {
    "2discs": "discs",
    "3rdiscs": "rdiscs",
    "4tapescassettes": "tapescassettes",
    "5other": "other",
}

def list_image_files(folder: Path) -> list[str]:
    return [
        item.name
        for item in folder.iterdir()
        if item.is_file() and not item.name.startswith(".") and item.suffix.lower() in DEFAULT_EXTENSIONS
    ]


def category_key_from_relative_path(relative_path: Path) -> str:
    parts = relative_path.parts
    if not parts:
        raise ValueError("Nieprawidlowa sciezka kategorii: pusty relative path")

    if parts[0] in {"1diskettes", "planes"}:
        return f"{parts[-1]}Media"

    normalized_parts = list(parts)
    normalized_parts[0] = ROOT_CATEGORY_ALIASES.get(normalized_parts[0], normalized_parts[0])

    return f"{'-'.join(normalized_parts)}Media"


def collect_images(web_media_dir: Path) -> dict[str, list[str]]:
    folders = sorted((path for path in web_media_dir.rglob("*") if path.is_dir()), key=lambda path: path.as_posix().casefold())

    result: dict[str, list[str]] = {}

    for folder in folders:
        files = list_image_files(folder)
        if not files:
            continue

        files.sort(key=str.casefold)
        relative_path = folder.relative_to(web_media_dir)
        category_key = category_key_from_relative_path(relative_path)

        if category_key in result:
            raise ValueError(f"Wykryto duplikat klucza kategorii: {category_key}")

        result[category_key] = files

    return result


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(
        description=(
            "Generuje plik JSON o strukturze: nazwa_podfolderu -> lista plikow obrazow. "
            "Skanuje drzewo WebMedia i mapuje je na klucze kompatybilne ze strona."
        )
    )
    parser.add_argument(
        "-o",
        "--output",
        default="images.json",
        help="Sciezka pliku wyjsciowego JSON (domyslnie: images.json).",
    )
    return parser


def main() -> int:
    parser = build_parser()
    args = parser.parse_args()

    base_dir = Path(__file__).resolve().parent
    web_media_dir = base_dir / "WebMedia"
    if not web_media_dir.exists() or not web_media_dir.is_dir():
        parser.error(f"Brak folderu WebMedia: {web_media_dir}")

    output_path = Path(args.output).expanduser()
    if not output_path.is_absolute():
        output_path = base_dir / output_path
    output_path = output_path.resolve()

    try:
        data = collect_images(web_media_dir=web_media_dir)
    except ValueError as exc:
        parser.error(str(exc))

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with output_path.open("w", encoding="utf-8") as handle:
        json.dump(data, handle, indent=4, ensure_ascii=True)

    categories_count = len(data)
    images_count = sum(len(files) for files in data.values())
    print(f"Zapisano {categories_count} kategorii i {images_count} plikow do: {output_path}")

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
