/**
 * https://leetcode.com/problems/merge-sorted-array/
 *
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

const merge = (nums1, m, nums2, n) => {
  Array.from(Array(nums1.length - m)).forEach(() => nums1.pop())

  nums2.forEach((num) => nums1.push(num))

  nums1.sort((a, b) => a - b)
}

const nums1 = [1, 2, 3, 0, 0, 0]
const nums2 = [2, 5, 6]
const m = 3
const n = 3

merge(nums1, m, nums2, n)

console.log(nums1)
