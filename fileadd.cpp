#include <iostream>
#include <fstream>
#include <sstream>
#include <vector>
#include <set>
using namespace std;

int main() {
    std::ifstream inputFile("insta-api-reels-links.txt");
    std::vector<std::string> links;
    std::set<std::string> uniqueLinks;

    if (!inputFile.is_open()) {
        std::cerr << "Error opening file!" << std::endl;
        return 1;
    }

    std::string line;
    while (std::getline(inputFile, line)) {
        std::istringstream iss(line);
        std::string word;

        while (iss >> word) {
            // Check if the word is a link (simple check for "http" or "https")
            if (word.find("http") != std::string::npos) {
                // Check if the link is not already in the set
                if (uniqueLinks.find(word) == uniqueLinks.end()) {
                    // Add the link to the vector and set
                    links.push_back(word);
                    uniqueLinks.insert(word);
                }
            }
        }
    }

    inputFile.close();

    // Print the unique links
    std::cout << "Unique Links in the requested format:" << std::endl;
    std::cout << "[";

    for (auto it = links.begin(); it != links.end(); ++it) {
        if (it != links.begin()) {
            std::cout << ",";
        }
        std::cout << "\"" << *it << "\"";
    }

    std::cout << "]" << std::endl;

    return 0;
}
