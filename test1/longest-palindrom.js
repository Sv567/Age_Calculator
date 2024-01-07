function lengthOfLongestSubstring(s) {
    let set = new Set();
    let left = 0 , maxSize = 0;

    for (let i = 0; i < s.length; i++) {

        while (set.has(s[i])) {
            set.delete(s[left])
            left++;
        }
        set.add(s[i]);
        maxSize = Math.max(maxSize, i - left + 1)
    }
    console.log("length of longest substring is - "+maxSize);
}
lengthOfLongestSubstring("abcdbbbabcdecbd");