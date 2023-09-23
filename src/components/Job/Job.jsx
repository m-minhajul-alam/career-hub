

const Job = ({ job }) => {

    const { company_logo } = job;

    return (
        <div>
            <img src={company_logo} alt="" />

        </div>
    );
};

export default Job;