const priorityMap = {
  4: "Urgent",
  3: "High",
  2: "Medium",
  1: "Low",
  0: "No priority",
};

export const groupTickets = (tickets, groupBy) => {
  return Object.values(tickets).reduce((groups, ticket) => {
    let groupKey = ticket[groupBy];
    if (groupBy === "priority") {
      groupKey = priorityMap[groupKey];
    }
    if (!groups[groupKey]) groups[groupKey] = [];
    groups[groupKey].push(ticket);
    return groups;
  }, {});
};

// export const sortedTickets = tickets.sort((a, b) => {
//   if (sortBy === "Priority") {
//     return b.priority - a.priority; // Descending priority
//   } else if (sortBy === "Title") {
//     return a.title.localeCompare(b.title); // Ascending title
//   }
//   return 0;
// });
