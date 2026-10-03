/**
 * Time complexity: O(nlogn), 
 * Space complexity: O(n)
 */
export default function mergeRanges(meetings) {
  if (meetings.length === 0) return []

  const coppiedMeetings = copyArray(meetings)

  const sortedMeetings = coppiedMeetings.sort(
    (a, b) => a.startTime - b.startTime
  )

  const mergedMeetings = [sortedMeetings[0]]

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i]
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]

    if (currentMeeting.startTime <= lastMergedMeeting.endTime)
      lastMergedMeeting.endTime = Math.max(
        currentMeeting.endTime,
        lastMergedMeeting.endTime
      )
    else mergedMeetings.push(currentMeeting)
  }

  return mergedMeetings
}

function copyArray(array) {
  return JSON.parse(JSON.stringify(array))
}
