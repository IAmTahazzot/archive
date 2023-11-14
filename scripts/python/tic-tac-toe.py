# Tic-tac-toe game in Python

# The board
board = ["-", "-", "-", "-", "-", "-", "-", "-", "-"]

# Define players
players = ["X", "O"]

# Current player
current_player = players[0]

# Print the board
def print_board():
    print(board[0] + " | " + board[1] + " | " + board[2])
    print("---|---|---")
    print(board[3] + " | " + board[4] + " | " + board[5])
    print("---|---|---")
    print(board[6] + " | " + board[7] + " | " + board[8])

# Get the player's move
def get_player_move():
    while True:
        move = input("Enter your move (1-9): ")
        if move not in ["1", "2", "3", "4", "5", "6", "7", "8", "9"]:
            print("Invalid move")
            continue
        else:
            move = int(move) - 1
            if board[move] == "-":
                return move
            else:
                print("This spot is already taken")

# Check if the game is over
def is_game_over():
    # Check for a winner
    for i in range(3):
        if board[i * 3] == board[(i * 3) + 1] == board[(i * 3) + 2] != "-":
            return True
        if board[i] == board[i + 3] == board[i + 6] != "-":
            return True
    # Check for a draw
    if "-" not in board:
        return True

# Make a move
def make_move(player, move):
    board[move] = player

# Play the game
while True:

    # Print the board
    print_board()

    # Get the current player's move
    move = get_player_move()

    # Make the move
    make_move(current_player, move)

    # Check if the game is over
    if is_game_over():
        break

    # Switch players
    current_player = players[(players.index(current_player) + 1) % 2]

# Check the winner
if current_player == players[0]:
    print("Player X wins!")
elif current_player == players[1]:
    print("Player O wins!")
else:
    print("Draw!")
