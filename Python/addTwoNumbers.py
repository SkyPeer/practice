class ListNode:
    def __init__(self, val=0, carry=None):
        self.val = val
        self.carry = carry

def foo(list1, list2):
    idx = 0
    length1 = len(list1)
    length2 = len(list2)
    max_length = max(length1, length2)

    # print('max_length', max_length)

    result_list = []

    while idx < max_length:

        try:
            l1_value = list1[idx]
        except:
            l1_value = 0

        try:
            l2_value = list2[idx]
        except:
            l2_value = 0


        sum = l1_value + l2_value

        if idx:
            carry = result_list[idx - 1].carry
            sum += carry

        result = divmod(sum, 10)

        carry = result[0]
        val = result[1]

        # print('-------', idx, '-------')
        # print('val', val)
        # print('carry', carry)
        # print('--------------')
        # node =
        result_list.append(ListNode(val, carry))
        idx += 1

    if result_list[max_length -1].carry:
        result_list.append(ListNode(result_list[max_length -1].carry, 0))


    print('--------------')
    print('Result')
    i=0
    while i < len(result_list):
        print(result_list[i].val, result_list[i].carry)
        i += 1
    print('--------------')


foo([2,4,3], [5,6,4]) #[7,0,8]
foo([0], [0])
foo([9,9,9,9,9,9,9], [9,9,9,9])