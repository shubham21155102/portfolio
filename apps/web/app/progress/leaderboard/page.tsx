import Image from "next/image";
import react from "react";
const LeaderBoard=()=>{
    const leaderboardData = [
        { rank: 1, name: 'Shubham Kumar', score: 950 },
        { rank: 2, name: 'John Doe', score: 880 },
        { rank: 3, name: 'Jane Smith', score: 870 },
      ];
    return (
        <>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="relative p-1 justify-center items-center from-blue-500 to-white rounded-lg animate-bounce" style={{backgroundSize:'200%'}}>
        <div className="bg-gradient-to-r from-violet-500 to-pink-600 p-6 rounded-lg shadow-lg text-center text-black">
        <div className="flex flex-col items-center p-4 rounded-2xl bg-gradient-to-r from-blue-500 to-green-500 ">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-white to-black bg-clip-text text-transparent">
  LeaderBoard
</h1>
<table className="table-auto w-full max-w-2xl bg-white shadow-md rounded-lg overflow-hidden">
<thead>
          <tr className="bg-blue-500 bg-gradient-to-r from-violet-500 to-yellow-300">

            <th className="p-4">Rank</th>
            <th className="p-4">Name</th>
            <th className="p-4">Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((player, index) => (
            <tr key={index} className="text-center">
                {  index+1 ===(1 || 2 || 3 || 4 || 5) ? <><Image src={`/rank-${index+1}.avif`} alt="" width={100} height={50} className="max-w-1"/></>: <><Image src={`/rank-${index+1}.avif` || `/rank-${index+1}.jpeg`} alt="" width={100} height={100}/></>}
              <td className="p-4">{player.rank}</td>
              <td className="p-4">{player.name}</td>
              <td className="p-4">{player.score}</td>
            </tr>
          ))}
        </tbody>
</table>
        
        </div>
        </div>
        </div>
    </div>
     </>
    );

}
export default LeaderBoard;