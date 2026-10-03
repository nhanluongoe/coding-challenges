export interface Meeting {
  startTime: number;
  endTime: number;
}

export default function mergeRanges(meetings: Meeting[]): Meeting[] {
  if (meetings.length === 0) return [];

  const clonedMeetings = JSON.parse(JSON.stringify(meetings)) as Meeting[];

  const sortedMeetings = clonedMeetings.sort(
    (a, b) => a.startTime - b.startTime
  );

  const mergedMeetings = [sortedMeetings[0]];

  for (let i = 1; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i];
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1];

    if (currentMeeting.startTime <= lastMergedMeeting.endTime)
      lastMergedMeeting.endTime = Math.max(
        currentMeeting.endTime,
        lastMergedMeeting.endTime
      );
    else mergedMeetings.push(currentMeeting);
  }

  return mergedMeetings;
}
