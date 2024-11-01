/**
 * Function to get topic data for a particular slug
 * @param {Array} courseContent - Array of course content objects
 * @param {String} topicSlug - The slug of the topic to retrieve
 * @returns {Object|undefined} - The topic object if found, otherwise undefined
 */

 export const getTopicBySlug = (courseContent, topicSlug) => {
    // Iterate through the course content to find the topic with the given slug
    for (let topic of courseContent) {
      if (topic.topicSlug === topicSlug) {
        return topic;
      }
    }
    // If no matching topic is found, return undefined
    return undefined;
}
  
