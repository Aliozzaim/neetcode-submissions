class Solution:
    def dailyTemperatures(self, temperatures: List[int]) -> List[int]:
        n = len(temperatures)
        res = [0] * n

        for l in range(n):
            r = l + 1
            while r < n:
                if temperatures[r] > temperatures[l]:
                    res[l] = r - l
                    break
                r += 1

        return res