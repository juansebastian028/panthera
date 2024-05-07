import React from 'react'
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';

export const CardBlog = ({ isRow }) => {

    const { t } = useTranslation();
    return (
        <div className={classNames('card-blog', { 'card-blog--row': isRow })}>
            <img class="card-blog__img" src="https://assets.codepen.io/285131/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg" />

            <div class="card-blog__body">
                <small className='card-blog__date'> {t("CardBlog.Date")} </small>
                <h2 class="card-blog__title">
                {t("CardBlog.Title")}
                </h2>
                <p class="card-blog__intro">
                {t("CardBlog.Text")}
                </p>
                <div className='card-blog__user'>
                    <img className='card-blog__user-img' src="https://assets.codepen.io/285131/uslmOwQpdRRUwr6AmBP6JdzeHjS.jpg" />
                    <div className='card-blog__user-content'>
                        <h4 className='card-blog__user-name'>{t("CardBlog.Name")}</h4>
                        <p className='card-blog__user-position'>{t("CardBlog.Position")}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
