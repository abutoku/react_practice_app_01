import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';
import "./Sidebar.css";

function Sidebar() {
  return(
    <div className="sidebar">
          {/* ツイッターアイコン */}
          <TwitterIcon className='sidebar_twitterIcon'/>

          {/* SidebarOption */}
          <SidebarOptions text="ホーム" Icon={HomeIcon} active/>
          <SidebarOptions text="話題を検索" Icon={SearchIcon}/>
          <SidebarOptions text="通知" Icon={NotificationsIcon}/>
          <SidebarOptions text="メッセージ" Icon={MailOutlineIcon}/>
          <SidebarOptions text="ブックマーク" Icon={BookmarkBorderIcon}/>
          <SidebarOptions text="リスト" Icon={ListAltIcon}/>
          <SidebarOptions text="プロフィール" Icon={PermIdentityIcon}/>
          <SidebarOptions text="もっと見る" Icon={MoreHorizIcon}/>
          {/* SidebarOption */}
          {/* SidebarOption */}
          {/* SidebarOption */}
          {/* SidebarOption */}
          {/* SidebarOption */}

          {/* ツイートボタン */}
          <Button variant="outlined" className='sidebar_tweet' fullWidth>ツイートする</Button>
    </div>
  );
}

export default Sidebar
