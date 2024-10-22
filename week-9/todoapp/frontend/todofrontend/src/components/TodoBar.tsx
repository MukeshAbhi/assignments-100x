import { useRecoilValue } from "recoil"
import { todoItemselector } from "../store/todoatom"

const TodoBar = ()=>{

    const items = useRecoilValue(todoItemselector);

    return (
        <div>
            <div className="font-semibold text-5xl">
                Todos
            </div>
            <div className=" flex justify-start px-10 bg-blue-100 my-4 p-2">
                <div className="flex px-10"   >
                    <div className=" text-blue-600">Total items:</div>
                    <div className="px-2 mx-2 bg-sky-500 text-white rounded-md">{items.total}</div>
                </div>
                <div className="flex px-10">
                    <div className=" text-blue-600">Finished items:</div>
                    <div className="px-2 mx-2 bg-sky-500 text-white rounded-md">{items.completed}</div>
                </div>
                <div className="flex px-10">
                    <div className=" text-blue-600">Unfinished items:</div>
                    <div className="px-2 mx-2 bg-sky-500 text-white rounded-md">{items.pending}</div>
                </div>
            </div>
        </div>
    )

}

export default TodoBar