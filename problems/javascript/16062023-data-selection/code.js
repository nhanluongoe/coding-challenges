/**
 * @param {Array<{user: number, duration: number, equipment: Array<string>}>} sessions
 * @param {{user?: number, minDuration?: number, equipment?: Array<string>, merge?: boolean}} [options]
 */
export default function selectData(sessions, options) {
  if (options == null) return sessions;

  let result = [...sessions];
  const { user, minDuration, equipment, merge } = options;

  if (merge) {
    const sessionsByUser = new Map();
    for (const session of result) {
      const current = sessionsByUser.get(session.user) ?? {
        user: session.user,
        duration: 0,
        equipment: new Set(),
      };
      current.duration += session.duration;
      session.equipment.forEach((item) => current.equipment.add(item));
      sessionsByUser.delete(session.user);
      sessionsByUser.set(session.user, current);
    }
    result = Array.from(sessionsByUser.values(), (session) => ({
      ...session,
      equipment: Array.from(session.equipment).sort(),
    }));
  }

  if (user !== undefined) {
    result = result.filter((session) => session.user === user);
  }
  if (minDuration !== undefined) {
    result = result.filter((session) => session.duration >= minDuration);
  }
  if (equipment) {
    result = result.filter((session) =>
      session.equipment.some((item) => equipment.includes(item)),
    );
  }

  return result;
}
