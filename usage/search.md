---
title: Searching
nav_order: 7
layout: page
description: ""
parent: Usage
---

# Search file in Diff and Extract View

When browsing files in Diff View of two archives or Extract View of single archive, you can filter items either using simple search string or with powerful syntax options. Search pattern follows unix-like syntax which can be used to quickly filter using various parameters.

## Simple Search

You can directly enter the string you want to match for in the search bar and only files and folders matching it will be visible, including its child items.

## Using Search Patterns

Following patterns can be used to filter items in both views

| Filter Parameter | Syntax                             | Values                                                                                                                                                                                              | Example | Note                                                                  |
|------------------|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------|-----------------------------------------------------------------------|
| Match Type       | `-m`<br>`--match`                  | `in` - Match if search string in item name<br>`ex` - Match if item name is exactly search string<br>`re` - Match using Regex<br>`fm` - Match using fnmatch                                          |         |                                                                       |
| Ignore Case      | `-i`<br>`--ignore-case`            |                                                                                                                                                                                                     |         | Ignore capital and lowercase differences                              |
| Path             | `-p`<br>`--path`                   | Path value                                                                                                                                                                                          |         | Matches the search string against whole path instead of just the name |
| Change Type      | `-c`<br>`--change`                 | `A` - Match only Added<br>`D` - Match only Deleted<br>`M` - Match only Modified                                                                                                                     |         | **Only available in Diff View**                                       |
| Balance          | `-b`<br>`--balance`                | Same as Size Parameter                                                                                                                                                                              |         | **Only available in Diff View**                                       |
| Size             |                                    | `[COMPARISON_OPERATOR][SIZE][UNIT]`<br><br>Comparison Operators = `<`,`>`,`<=`,`>=`,`=`<br>Units = `KB`, `MB`, `GB`<br><br>**Note**: 2 size filters can be combined using a comma to create a range |         |                                                                       |
| Exclude Parents  | `--exclude-parents`                |                                                                                                                                                                                                     |         | Match only items without childrens                                    |
| Health           | `--healthy`<br>or<br>`--unhealthy` |                                                                                                                                                                                                     |         | **Only available in Extract View**                                    |
| Last Modified    | `--last-modified`                  | `[COMPARISON_OPERATOR][DATE]`<br><br>Comparison Operators = `<`,`>`,`<=`,`>=`,`=`<br>Date Format = `YYYY-MM-DD`<br><br>**Note**: 2 date filters can be combined using a comma to create a range     |         | **Only available in Extract View**                                    |
