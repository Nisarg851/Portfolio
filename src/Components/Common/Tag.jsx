const Tag = (tag) => {
    const [key, value] = Object.entries(tag.tag)[0];
    return <a href={`/tag/${key}`}
    className={`w-fit h-fit text-[0.7rem] text-nowrap px-2 py-0.5 ${key=="skill" ? "bg-[#374151] text-white skill_tag" : "bg-white tag"} rounded-[4px]`}>{value}</a>
}

export default Tag;