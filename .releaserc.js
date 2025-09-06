module.exports = {
  branches: ['main'],  // 监控的分支
  plugins: [
      '@semantic-release/commit-analyzer',
      {
          "preset": "angular",
          "releaseRules": [
            { type: 'fix', release: 'patch' },
            { type: 'feat', scope: 'minor', release: 'minor' },
            { type: 'feat', release: 'minor' } // 禁止其他 feat 触发版本
          ],
          "parserOpts": {
              "noteKeywords": ["BREAKING CHANGE", "BREAKING CHANGES"]
            }
      },
    '@semantic-release/release-notes-generator',  // 生成 release notes
    '@semantic-release/changelog',                // 更新 CHANGELOG.md
    ['@semantic-release/git', {
      assets: ['package.json', 'CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version}'
    }],
    //'@semantic-release/github'  
  ],
  tagFormat: 'v${version}',        
};
