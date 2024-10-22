const AddTodoBar = ()=>{
    return(
        <>
            <div className="flex justify-between my-4 py-4 bg-slate-300 font-semibold" >
                            <div className="px-4">
                                Title
                            </div>
                            <div className="px-4">
                                Completed
                            </div>
                            <div className="px-4">
                                Actions
                            </div>
                            <div className="pr-52">
                                Description
                            </div>
                        </div>
        </>
    )
}

export default AddTodoBar;