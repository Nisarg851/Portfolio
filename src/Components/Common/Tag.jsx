const Tag = (tag) => {
    return <a href={`/tag/${Object.keys(tag.tag)[0]}`}
    className="w-fit h-fit text-[0.7rem] text-nowrap px-2 py-0.5 bg-white rounded-[4px] tag">{Object.values(tag.tag)[0]}</a>
}

export default Tag;