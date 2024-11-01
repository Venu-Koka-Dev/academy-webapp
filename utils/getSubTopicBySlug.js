export const getSubTopicBySlug = (subTopics, subTopicSlug) => {
    // Iterate through the subTopics list to find the subTopic with the given slug
    for (let subTopic of subTopics) {
      if (subTopic.subTopicSlug === subTopicSlug) {
        return subTopic;
      }
    }
    // If no matching subTopic is found, return undefined
    return undefined;
}