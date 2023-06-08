module.exports = {
  branches: ["main"], // Config path
  plugins: [
    "@semantic-release/commit-analyzer", // check commits
    "@semantic-release/release-notes-generator", // make notes for release
    "@semantic-release/changelog", // update CHANGELOG.md
    "@semantic-release/npm", // publish in npm
    "@semantic-release/git", // make new tag with the changes
  ],
};
