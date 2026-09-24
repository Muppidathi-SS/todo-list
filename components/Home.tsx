import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import VerifiedIcon from "@mui/icons-material/Verified";
import SyncIcon from "@mui/icons-material/Sync";
export default function Home() {
  return (
    <>
      <div className="px-4 py-7">
        <h1 className="font-semibold text-2xl">Welcome to Todo Flow, Aadhi!</h1>
        <p className="text-[#464554] text-sm">
          Your workspace is ready. Let's make your team and daily workflows
          structured and productive.
        </p>
      </div>
      <div className="flex w-full justify-between px-4">
        <div className="flex border border-[#e3e3e4] rounded-xl px-6 py-2 w-[300px] shadow gap-12 flex justify-between items-center">
          <div className="space-y-2">
            <p className="text-black font-medium text-[18px]">Total tasks</p>
            <p className="font-semibold text-[26px] text-black">0</p>
          </div>
          <div className="p-2 flex justify-center items-center bg-[#E9EDFF] rounded-xl w-10 h-10">
            <AssignmentTurnedInIcon sx={{ color: "#4648D4" }} />
          </div>
        </div>
        <div className="flex border border-[#e3e3e4] rounded-xl px-6 py-2 w-[300px] shadow gap-12 flex justify-between items-center">
          <div className="space-y-2">
            <p className="text-black font-medium text-[18px]">Ongoing tasks</p>
            <p className="font-semibold text-[26px] text-black">0</p>
          </div>
          <div className="p-2 flex justify-center items-center bg-[#bce8d0] rounded-xl w-10 h-10">
            <VerifiedIcon sx={{ color: "green" }} />
          </div>
        </div>
        <div className="flex border border-[#e3e3e4] rounded-xl px-6 py-2 w-[300px] shadow gap-12 flex justify-between items-center">
          <div className="space-y-2">
            <p className="text-black font-medium text-[18px]">
              Completed Tasks
            </p>
            <p className="font-semibold text-[26px] text-black">0</p>
          </div>
          <div className="p-2 flex justify-center items-center bg-[#e1d2c1] rounded-xl w-10 h-10">
            <SyncIcon sx={{ color: "#c96800" }} />
          </div>
        </div>
      </div>
    </>
  );
}
