import spinner from '../../assets/spinner.gif'

function Spinner() {
    return (
        <div className='w-100 mt-20'>
            <img width={200} className='text-center mx-auto' src={spinner} alt="Spinner Gif"/>
        </div>
    )
}

export default Spinner;