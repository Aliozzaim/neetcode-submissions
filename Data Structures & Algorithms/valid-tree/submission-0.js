class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
  validTree(n, edges) {
    if (edges.length !== n - 1) return false;

    const graph = Array.from({ length: n }, () => []);

    for (const [u, v] of edges) {
        graph[u].push(v);
        graph[v].push(u);
    }

    const visited = new Set();

    function dfs(node, parent) {
        if (visited.has(node)) return false;

        visited.add(node);

        for (const neighbor of graph[node]) {
            if (neighbor === parent) continue; // ignore coming back edge
            if (!dfs(neighbor, node)) return false;
        }

        return true;
    }

    if (!dfs(0, -1)) return false;

    return visited.size === n;
}
}
