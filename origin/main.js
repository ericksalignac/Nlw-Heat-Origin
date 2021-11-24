const socialMediaLinks = {
  name: 'Erick Rocha',
  github: 'ericksalignac',
  youtube: 'channel/UC5JtcmUBXbG4SDaTxDwE_Jg',
  instagram: 'erick_salignac',
  facebook: '/profile.php?id=100005985194717',
  twitter: 'erick_salignac'
}

function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')
    li.children[0].href = `https://${social}.com/${socialMediaLinks[social]}`
  }
}
changeSocialMedia()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${socialMediaLinks.github}`
  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
      userLink.href = data.html_url
    })
}
getGithubProfileInfos()
