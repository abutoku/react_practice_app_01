import Search from '@mui/icons-material/Search'
import React from 'react'
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from 'react-twitter-embed';
import "./Widgets.css"

function Widgets() {
  return (
    <div className='widgets'>
      <div className='widgets_input'>
        <Search className='widgets_searchIcon'/>
        <input placeholder='キーワード検索' type="text"/>
      </div>

      <div className='wigets_wigetContainer'>
        <h2>いまどうしてる？</h2>

        {/* ライブラリを追加・追記 */}
        <TwitterTweetEmbed
          tweetId={'859804243598888962'}
          />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="nihon_osakana"
          options={{height: 400}}
        />

      <TwitterShareButton
          url={'https://twitter.com/Twitter'}
          options={{ text: '#React', via: 'Twitter' }}
        />

      </div>

    </div>
  )
}

export default Widgets
