import React from "react";
import { Skeleton } from "@mui/material";

const Shimmer = () => {
    return (
        <div className="flex justify-center">
            <div className="w-full md:w-6/12 p-4 border m-auto">
                <div className="flex flex-col gap-4">
                    <span className="text-xl font-bold text-black">
                        <Skeleton width={200} height={30} />
                    </span>
                    <Skeleton variant="rectangular" width={500} height={300} />
                    {[1, 2].map((index) => (
                        <div className="flex gap-4" key={index}>
                            <div className="flex flex-col gap-2 w-full">
                                <span>
                                    <Skeleton width={200} height={24} />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Skeleton variant="rectangular" width={130} height={100} />
                                <Skeleton
                                    className="bg-white shadow-md border text-sm py-1 px-4 font-medium rounded hover:bg-orange-200 transition-all duration-300 ease-in-out"
                                    width={130}
                                    height={28}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shimmer;
