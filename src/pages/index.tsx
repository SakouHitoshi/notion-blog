import Link from 'next/link'
import Header from '../components/header'
import ExtLink from '../components/ext-link'
import Features from '../components/features'
import GitHub from '../components/svgs/github'
import sharedStyles from '../styles/shared.module.css'

export default () => (
  <>
    <Header titlePre="Profile" />
    <div className={sharedStyles.layout}>
      　
      <div className="explanation">
        　 <h1>Profile</h1>
        <div className="Profile">
          <img src="Profile2.jpg" alt="Profile"></img>
        </div>
        <p>Hossoといいます。1991年生まれの29歳です。</p>
        <p>フリーランスで音楽系の仕事をしております。</p>
        <p>
          現在プログラミングスクールのフィヨルドブートキャンプで学習中、日々の学んだ事なんかを発信していきます。
        </p>
        <p>趣味：</p>
        <p>
          洋楽🎧、JAZZ鑑賞 &
          演奏(コントラバス)🎻、カメラ📷、ガジェット🤖、漫画📖、ゲーム(主にSteamにある洋ゲー)🎮
        </p>
        <p></p>
      </div>
    </div>
  </>
)
