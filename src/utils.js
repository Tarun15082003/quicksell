export const groupTickets = (tickets, groupBy) => {
  return Object.values(tickets).reduce((groups, ticket) => {
    const groupKey = ticket[groupBy];
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
