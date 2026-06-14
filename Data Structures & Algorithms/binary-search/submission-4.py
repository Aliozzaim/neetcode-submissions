class Solution:
    def search(self, nums: List[int], target: int) -> int:
        l = 0
        n = len(nums)
        r = n - 1

        while r >= l:
            m = l + (r - l) // 2
            if nums[m] == target: 
                return m 
            elif nums[m] < target:
                l = m + 1
            else:
                r = m - 1
        return -1

        