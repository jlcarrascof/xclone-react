export default function Tweet({ user, body, date, time, likes, retweets, onLike, onRetweet}) {

    return (

        <div className='border p-4 rounded-lg bg-white shadow-md'>

            <div className='flex justify-between items-center border-b pb-2 mb-2'>
                <span className='font-bold text-gray-800'>@{user}</span>
                <span className='text-sm text-gray-500'>{date} - {time}</span>
            </div>

            <div className='text-gray-700 text-b mb-4 border-b pb-4'>
                {body}
            </div>

            <div className='flex justify-between mt-4'>
                <button
                  className='flex items-center text-blue-500 hover:text-blue-700 transition duration-200 ease-in-out tranform hover:scale-110'
                  onClick={onLike}
                >
                  Likes 👍 <span className='ml-2'>{likes}</span>
                </button>

                <button
                  className='flex items-center text-green-500 hover:text-green-700 transition duration-200 ease-in-out tranform hover:scale-110'
                  onClick={onRetweet}
                >
                  Retweets 🔁 <span className='ml-2'>{retweets}</span>
                </button>
            </div>

        </div>

    )

}
