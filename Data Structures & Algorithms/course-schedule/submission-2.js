class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
            const graph = Array.from({ length: numCourses }, () => []);
    const indegree = Array(numCourses).fill(0);

    // build graph
    for (const [course, pre] of prerequisites) {
        graph[pre].push(course);
        indegree[course]++;
    }

    const queue = [];

    // start with courses having no prerequisites
    for (let i = 0; i < numCourses; i++) {
        if (indegree[i] === 0) {
            queue.push(i);
        }
    }

    let taken = 0;

    while (queue.length > 0) {
        const node = queue.shift();
        taken++;

        for (const neighbor of graph[node]) {
            indegree[neighbor]--;
            if (indegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        }
    }

    return taken === numCourses;
    }
}
