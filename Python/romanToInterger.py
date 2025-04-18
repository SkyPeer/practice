def romanToInt(s):
    """
    :type s: str
    :rtype: int
    """
    s_dict = {
        'IV': 4,
        'IX': 9,
        'XL': 40,
        'XC': 90,
        'CD': 400,
        'CM': 900,
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    req = s
    result = 0

    # prepare data
    for val in s_dict:
        if val in req:
            replace_va = ' ' + str(s_dict[val])
            req = req.replace(val, replace_va)

    values_list = req.lstrip().split(' ')

    for val in values_list:
        result = result + int(val)

    return result


print(romanToInt('MCMXCIV'))
print(romanToInt('III'))