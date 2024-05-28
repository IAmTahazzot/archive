# VIM VI Improved DOC [2022]

VIM or Vi improved is a terminal based editor to edit any text files. It 
does have tons of magical key bindings to speed up the production. 
(Recommended only for Heavy learner)

## How to start?

After installing vim on your system. Type `vi` or `vim` followed by your 
file name. If the file doesn't exist it will create one.

<h4 style="text-align: center; color: skyblue">Welcome to VIM</h4>

Wait, Do you know how to exit from it? :) without closing the terminal or 
shutting down your PC (just kidding) .
If yes **congratulation**.

To exit from VIM editor:

- `:q` will quit normally
- `:q!` quite without saving anything
- `:wq!` save and exit

## Executing command right on vim editor
```shell
:![your_command]

# for example
:!ls # list of files & folders
:!touch main.py # will create new file
```

## Config

- `:set number` shows line number


## Navigation

Remember all the commands has ability to execute multiple times at once 
using number before the command for example:

`5l` will move right to 5 char, `10j` will jump down 10 line at once or `3w` 
will move 3 words at once.

- `l` move right
- `h` move left
- `k` line up
- `j` line down
- `gg` top of the file
- `G` bottom of the file
- `a` move right and insert mode
- `A` move end of the line and insert mode
- `i` insert mode
- `I` go to beginning of the line & insert mode
- `%` jump to opening & closing code block () {} []
- `w` word forward (beginning of the word)
- `e` word forward (end of the word)
- `b` word backward (beginning of the word)
- `x` delete forward
- `X` delete backward
- `u` undo
- `ctrl+r` redo (`command+r` in mac maybe)
- `o` new line down & insert mode
- `O` new line up & insert mode
- `v` start selecting from the current state
- `V` start selecting from current whole line

- `d` delete /cut the selected text 
- `D` delete /cut rest of line forward
- `dd` delete /cut full line
- `yy/ Y` yank/ copy
- `p` paste (line down)
- `P` paste (line up)
- `cc` changes the line
- `C` changes the rest of the line forward

- `r` replace single char followed by char 
- `R` replace all char forward one by one


## Find | Searching | Replace


- `/your_word` will find the word and to move to the next word `n` & capital 
  `N` will move to backward search
- `?your_word` just do backward search 
- `#` find same word backward
- `*` find same word forward
- `f` followed by specific char will go onto the position & capital `F` does 
  the same backward
- `t` same as `f` just go right before the specified char & capital `T` does 
  the same backward
- `:%s/replace_word/new_word/g` will change all replace_word to new_word for 
  whole document or file.
- `:s/old/new` if you have selection, it will change each words from 
  selection

## Multiple commands at once

VIM can understand multiple commands at once such as:
It's very handy once you understand the magical pattern.

Multiple/ Combined command are very powerful.

- `dw` will delete a word, where `d` for delete and `w` for word
- `yw` will copy a word
- `d2w` will delete 2 words
- `d%` drop/ delete everything inside parenthesis (
- `diw` will delete a word from anywhere of the word
- `v2w` will select 2 word
- `yiw` yank inner word
- `ci(` change everything inside parenthesis (

## More Editing (Level: Intermediate) 

- `>>` will indent right
- `<<` will indent left
- `ctrl/ command + v` will enable the block visual mode
- `==` correct the indentation for most of the lang
- `=G` correct indentation everything below

## Macro | Repeating

- `.` repeats the last command

Macro is a way to store multiple commands so that we can use it to make the 
hard work faster.

To start a macro type `q` followed by macro name like `a, b, c...z` so we will 
use `qa` after that whatever command you type will be 
saved on macro. To stop recording back to normal mode and type `q`.

To use it type `@` followed by the macro name in this case it's `a`
so to execute this particular example we have to use `@a`.
See the registry by typing `:reg`
