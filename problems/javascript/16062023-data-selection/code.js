/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @param {{user?: number, minDuration?: number, equipment?: Array<string>, merge?: boolean}} [options]
 * @return {Array}
 */
export default function selectData(sessions, options) {
  if (options == null) {
    return sessions;
  }

  let result = [...sessions];
  const { user, minDuration, equipment, merge } = options;

  if (merge) {
    const mergedResult = [];
    const uniqueUsers = [];
    result
      .map((r) => r.user)
      .forEach((u) => {
        if (uniqueUsers.includes(u)) {
          uniqueUsers.splice(uniqueUsers.indexOf(u), 1);
        }

        uniqueUsers.push(u);
      });

    uniqueUsers.forEach((u) => {
      const mergedSession = {};
      mergedSession.user = u;

      const mergedDuration = result
        .filter((r) => r.user === u)
        .map((r) => r.duration)
        .reduce((acc, next) => acc + next, 0);
      mergedSession.duration = mergedDuration;

      const mergedEquipment = result
        .filter((r) => r.user === u)
        .map((r) => r.equipment)
        .reduce((acc, next) => Array.from(new Set(acc.concat(next))), []);
      mergedSession.equipment = mergedEquipment.sort();

      mergedResult.push(mergedSession);
    });

    result = mergedResult;
  }

  if (user) {
    result = result.filter((session) => session.user === user);
  }

  if (minDuration) {
    result = result.filter((session) => session.duration >= minDuration);
  }

  if (equipment) {
    result = result.filter((session) =>
      session.equipment.some((e) => equipment.includes(e))
    );
  }

  return result;
}

const sessions = [
  { user: 8, duration: 50, equipment: ['bench'] },
  { user: 7, duration: 150, equipment: ['dumbbell'] },
  { user: 1, duration: 10, equipment: ['barbell'] },
  { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
  { user: 7, duration: 200, equipment: ['bike'] },
  { user: 2, duration: 200, equipment: ['treadmill'] },
  { user: 2, duration: 200, equipment: ['bike'] },
];

console.log(selectData(sessions, { merge: true }));

selectData(sessions);
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//   { user: 1, duration: 10, equipment: ['barbell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { user: 2 });
// [
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { minDuration: 200 });
// [
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['treadmill'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { minDuration: 400 });
// [];

selectData(sessions, { equipment: ['bike', 'dumbbell'] });
// [
//   { user: 7, duration: 150, equipment: ['dumbbell', 'kettlebell'] },
//   { user: 7, duration: 100, equipment: ['bike', 'kettlebell'] },
//   { user: 7, duration: 200, equipment: ['bike'] },
//   { user: 2, duration: 200, equipment: ['bike'] },
// ];

selectData(sessions, { merge: true });
// [
//   { user: 8, duration: 50, equipment: ['bench'] },
//   { user: 1, duration: 10, equipment: ['dumbbell'] },
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];

selectData(sessions, { merge: true, minDuration: 400 });
// [
//   { user: 7, duration: 450, equipment: ['bike', 'dumbbell', 'kettlebell'] },
//   { user: 2, duration: 400, equipment: ['bike', 'treadmill'] },
// ];
