def knapsack_dynamic_programming(weights: list[int], values: list[int], capacity: int) -> tuple[int, list[int]]:
    """
    Solve the 0/1 Knapsack Problem using dynamic programming.

    Args:
        weights: List of item weights
        values: List of item values
        capacity: Maximum capacity of the knapsack

    Returns:
        tuple: (maximum value, list of selected item indices)
    """
    n = len(weights)
    # Create a 2D array to store the maximum value for each subproblem
    dp = [[0 for _ in range(capacity + 1)] for _ in range(n + 1)]

    print('dp1', dp)

    # Build the dp table
    for i in range(1, n + 1):
        for w in range(capacity + 1):
            if weights[i - 1] <= w:
                dp[i][w] = max(values[i - 1] + dp[i - 1][w - weights[i - 1]], dp[i - 1][w])
            else:
                dp[i][w] = dp[i - 1][w]

    print('dp2', dp)

    # Find the selected items

    selected_items = []
    w = capacity
    for i in range(n, 0, -1):
        if dp[i][w] != dp[i - 1][w]:
            selected_items.append(i - 1)
            w -= weights[i - 1]


    return dp[n][capacity], selected_items[::-1]


def main():
    # Example usage
    weights = [1, 4, 3]  # weights of items
    values = [1500, 3000, 2000]  # values of items
    capacity = 4  # knapsack capacity

    max_value, selected_items = knapsack_dynamic_programming(weights, values, capacity)

    print("Knapsack Problem Solution:")
    print(f"Maximum value: {max_value}")
    print("Selected items:")
    for idx in selected_items:
        print(f"Item {idx + 1}: Weight = {weights[idx]}, Value = {values[idx]}")


if __name__ == "__main__":
    main()