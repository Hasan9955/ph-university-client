import { useGetAllAcademicSemesterQuery } from "../../../redux/features/academicSemester/academicSemesterApi";


const AcademicSemester = () => {

    const { data, error } = useGetAllAcademicSemesterQuery(undefined);
    data ? console.log(data) :
    console.error(error); 
    return (
        <div>
            <h1>This is academic semester page</h1>
        </div>
    );
};

export default AcademicSemester;