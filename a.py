def subsets(nums):
    def backtrack(start, end, tmp):
        ans.append(tmp[:])
        for i in range(start, end):
            tmp.append(nums[i])
            backtrack(i+1, end, tmp)
            tmp.pop()
    ans = []
    backtrack(0, len(nums), [])
    return ans

nums = [1,2,3]
print(subsets(nums))
