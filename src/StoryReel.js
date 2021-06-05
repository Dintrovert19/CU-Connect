import React from 'react'
import Story from './Story';
import "./StoryReel.css";

function StoryReel() {
    return (
        <div className='storyReel'>
            <Story image="https://ichef.bbci.co.uk/images/ic/1920x1080/p072nhvf.jpg" profileSrc="https://images.unsplash.com/profile-1526936950214-7fa0cd79390f?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff 1x, https://images.unsplash.com/profile-1526936950214-7fa0cd79390f?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff 2x" title="Dummy1"/>
            
            <Story image="https://s3.amazonaws.com/www.autowise.com/wp-content/uploads/2018/07/30161056/McLaren-Senna.jpg" profileSrc="https://images.unsplash.com/profile-1588843009732-f1250cadfbf7image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff 1x, https://images.unsplash.com/profile-1588843009732-f1250cadfbf7image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff 2x" title="Dummy2"/>

            <Story image="https://www.designnews.com/sites/designnews.com/files/styles/article_featured_retina/public/Design%20News/00-Divo_BUGATTI.jpg?itok=iRSOcGz8" profileSrc="https://images.unsplash.com/profile-1574158378034-91732668c89fimage?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff 1x, https://images.unsplash.com/profile-1574158378034-91732668c89fimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff 2x" title="Dummy3"/>

            <Story image="https://www.goodcarbadcar.net/wp-content/uploads/2019/07/Canada-%E2%80%93-Sports-Car-Sales-Figures.png" profileSrc="https://images.unsplash.com/profile-fb-1505292720-29942be9ef89.jpg?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff 1x, https://images.unsplash.com/profile-fb-1505292720-29942be9ef89.jpg?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff 2x" title="Dummy4"/>

            <Story image="https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/body-image/public/1-corvette-stingray-c8-2019-fd-hr-hero-front_0.jpg?itok=SEYe_vLy" profileSrc="https://images.unsplash.com/profile-1580416274030-fbb94dfec844image?dpr=1&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff 1x, https://images.unsplash.com/profile-1580416274030-fbb94dfec844image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff 2x" title="Dummy5"/>

        </div>
    )
}

export default StoryReel
