import { Footer } from '../components/footer';
import { Toolbar } from '../components/toolbar';
import employeeData from '../db.json'

export  function EOM ({ employee }) {
    console.log(employee);
    return(
        <div className='page-container'>

            <Toolbar />

            <div className='flex flex-1 items-center flex-col mt-12'>
                <h1 className="text-black">Basic Information</h1>
                <div className='text-center'>
                    <h3 className="text-black">{ employee.name }</h3>
                    <h6 className="text-black">{ employee.position }</h6>
                    <img className='w-60 pt-3 pb-3 rounded-full' src={ employee.image } alt="Empoyee"/>
                    <p className="text-black">{ employee.description } </p>
                    
                </div>
            </div>
            <Footer />
        </div>
    );
};

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch(
        'https://raw.githubusercontent.com/jassegama/nextnews/master/db.json'
        );
    const employee = await apiResponse.json();

    return{
        props: {
            employee
        }
    }
};

export default EOM;