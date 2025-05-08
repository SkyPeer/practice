class Solution:
    def __init__(self):
        self.original = None
        self.reversed_num = 0


    def isPalindrome(self, x: int) -> bool:
        if self.original is None: #sanity check
            self.original = x

        digit = x % 10 #x modules 10 (take modular 10)
        print('digit', digit)
        self.reversed_num = self.reversed_num * 10 + digit #(multiplied by 10 add the digit)
        x = x // 10 #chopping off (removing)

        if x > 0:
            return Solution.isPalindrome(self, x)

        pass
        return self.original == self.reversed_num



calc = Solution()
print(calc.isPalindrome(121))