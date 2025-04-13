# Definition for singly-linked list.
class ListNode(object):
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution(object):
    def addTwoNumbers(self, l1, l2):
        print(l1)
        dummy = ListNode()
        current = dummy
        carry = 0

        while l1 or l2 or carry:
            sum_val = carry
            l1_value = 0
            l2_value = 0

            if l1:
                l1_value = l1.val
                l1 = l1.next

            if l2:
                l2_value = l2.val
                l2 = l2.next

            result = divmod((l1_value + l2_value) + sum_val, 10)
            carry = result[0]
            val = result[1]

            current.next = ListNode(val)
            current = current.next

        print(dummy.next)
        return dummy.next
