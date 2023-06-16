import {HiDocumentText} from "react-icons/hi";


const Header = () => {
  return (
    <div className="header">
        <h2 className="container p-10 mx-auto uppercase font-semibold text-teal-500 tracking-wider flex gap-2 items-center border-b border-dashed border-teal-900 rounded-tl-xl bg-gray-900">
            <span>
                <HiDocumentText/>
            </span>
            <span>Todo App</span>
        </h2>
    </div>
  )
}

export default Header