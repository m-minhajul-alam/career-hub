import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([])

    useEffect(() => {
        fetch('jobsData.json')
            .then(res => res.json())
            .then(data => setJobs(data));
    }, [])

    return (
        <div>
            <div className=" text-center">
                <h1 className="text-4xl">Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div>
                {
                    jobs.map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;