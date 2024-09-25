def count_leading_hashtags(line:str) -> int:
    count = 0
    for char in line:
        if char == "#":
            count += 1
        elif char == " ":
            # Potentially difficult to see why this works here.
            # It's because we want the first non hashtag to be a space
            return count
        else:
            return 0
    return count
