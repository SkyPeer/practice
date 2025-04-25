# def romanToInt(s):
#     """
#     :type s: str
#     :rtype: int
#     """

class Solution:
        def RomantoInteger(self, s: str):
            s_dict = {
                # 'IV': 4,
                # 'IX': 9,
                # 'XL': 40,
                # 'XC': 90,
                # 'CD': 400,
                # 'CM': 900,
                'I': 1,
                'V': 5,
                'X': 10,
                'L': 50,
                'C': 100,
                'D': 500,
                'M': 1000
            }
            i = 0
            result = 0

            print('range', range(10, 1))

            while i < len(s):

                current_element = s_dict.get(s[i])

                if i + 1 < len(s):
                    next_element = s_dict.get(s[i+1])
                else:
                    next_element = s_dict.get(s[i])

                if  current_element < next_element:
                    result += next_element - current_element
                    i += 2
                else:
                    result += current_element
                    i += 1


            return result

sol = Solution()
result = sol.RomantoInteger('III')
print('result', result)
# pass


# print(romanToInt('MCMXCIV'))
# print(romanToInt('III'))


# Input: s = "MXCIV" len 5
# i = 1
# total = 1000 + 90 + 4 = 1094

