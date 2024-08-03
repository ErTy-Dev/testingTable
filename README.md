# Тестовое задание 

## Использовал Vite + React, компонент DataGrid из библиотеки MUI

## Колонки базово фильтруются, фильтры из коробки DataGrid

## Во всех текстовых колонках разные стили

## - При клике на картинку открывается модальное окно с большой картинкой

## -Высота строк автоматическая, в зависимости от контента и не меньше 100px и не больше  300px

## Сделал темную тему легкую

## Для таблицы использовал api https://fakestoreapi.com/

## При перезагрузке сохраняется один фильтр из-за 
```
MUI X: The `sortModel` can only contain a single item when the `disableMultipleColumnsSorting` prop is set to `true`.
If you are using the community version of the `DataGrid`, this prop is always `true`.
```
А так для того чтобы сохранять при перезагрузке фильтры использовал URLSearchParam





