import { useState, useEffect } from "react";

function CommitGrid({ username }: any) {
  const [commitData, setCommitData] = useState([]);

  useEffect(() => {
    async function fetchCommits() {
      try {
        const response = await fetch(
          `https://api.github.com/users/${username}/repos`
        );
        const repos = await response.json();
        const commitedData = await Promise.all(
          repos.map(async (repo) => {
            const commitResponse = await fetch(
              `https://api.github.com/repos/${username}/${repo.name}/commits`
            );
            const commitHistory = await commitResponse.json();
            const commitCounts = [0, 0, 0, 0, 0, 0, 0];
            commitHistory.forEach((commit) => {
              const commitDate = new Date(commit.commit.author.date);
              const dayOfWeek = commitDate.getUTCDay();
              commitCounts[dayOfWeek]++;
            });
            return commitCounts;
          })
        );
        setCommitData(commitedData);
      } catch (error) {
        console.error(error);
      }
    }
    fetchCommits();
  }, [username]);

  const colors = [
    "bg-gray-200",
    "bg-green-1",
    "bg-green-2",
    "bg-green-3",
    "bg-green-4",
  ];
  const getFillColor = (count: number) => {
    if (count >= 20) {
      return colors[4];
    } else if (count >= 15) {
      return colors[3];
    } else if (count >= 10) {
      return colors[2];
    } else if (count >= 5) {
      return colors[1];
    } else {
      return colors[0];
    }
  };

  return (
    <div className="relative">
      <div className="overflow-x-auto overflow-y-hidden whitespace-nowrap">
        <div className="inline-flex">
          {commitData.map((commitCounts, i) => (
            <div className="relative" key={i}>
              <div className="rounded-md border border-gray-300 p-1">
                {commitCounts.map((count, j) => (
                  <div
                    className={`h-3 w-3 ${getFillColor(
                      count
                    )} inline-block rounded-sm`}
                    key={j}
                  />
                ))}
              </div>
              <div className="absolute -bottom-4 -left-4">
                <div className="rounded-t-md border-t border-l border-r border-gray-300 bg-transparent px-1">
                  <span className="text-xs text-gray-500">
                    {new Date()
                      .toLocaleString("default", { weekday: "short" })
                      .toUpperCase()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-1.5">
        <div className="mr-1 inline-block h-3 w-3 rounded-sm bg-gray-200" />
        <span className="text-sm text-gray-500">Less</span>
        <div className="bg-green-4 mx-1 inline-block h-3 w-3 rounded-sm" />
        <span className="text-sm text-gray-500">More</span>
      </div>
    </div>
  );
}

export default CommitGrid;
