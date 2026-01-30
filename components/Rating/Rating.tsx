"use client";

import {ForwardedRef, forwardRef, JSX, KeyboardEvent, useEffect, useRef, useState} from "react";
import {RatingProps} from "@/components/Rating/Rating.props";
import styles from "./Rating.module.css";
import cn from "classnames";
import StarIcon from "./star.svg";

export const Rating = forwardRef(({
                                      isEditable = false,
                                      error,
                                      rating,
                                      setRating,
                                      tabIndex,
                                      ...props
                                  }: RatingProps, ref: ForwardedRef<HTMLDivElement>): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
    const ratingArrayRef = useRef<(HTMLSpanElement | null)[]>([]);

    useEffect(() => {
        constructRating(rating);
    }, [rating, tabIndex]);

    const computeFocus = (r: number, i: number): number => {
        if (!isEditable) {
            return -1;
        }
        if (!rating && i == 0) {
            return tabIndex ?? 0;
        }
        if (r == i + 1) {
            return tabIndex ?? 0;
        }
        return -1;
    };

    const constructRating = (currentRating: number) => {
        const upgradeRating = ratingArray.map((r: JSX.Element, i: number) => {
            return (
                <span className={cn(styles.star, {
                    [styles.filled]: i < currentRating,
                    [styles.editable]: isEditable
                })}
                      onMouseEnter={() => changeDisplay(i + 1)}
                      onMouseLeave={() => changeDisplay(rating)}
                      onClick={() => onClick(i + 1)}
                      tabIndex={computeFocus(rating, i)}
                      onKeyDown={handleKey}
                      ref={r => {
                          if (ratingArrayRef.current) {
                              ratingArrayRef.current.push(r)
                          }
                      }}
                >
                    <StarIcon/>
                </span>
            );
        });
        setRatingArray(upgradeRating);
    };

    const changeDisplay = (i: number) => {
        if (!isEditable) {
            return;
        }
        constructRating(i);
    };

    const onClick = (i: number) => {
        if (!isEditable || !setRating) {
            return;
        }
        setRating(i);
    };

    const handleKey = (e: KeyboardEvent<HTMLSpanElement>) => {
        if (!setRating || !isEditable) {
            return;
        }
        if (e.code == "ArrowRight" || e.code == "ArrowUp") {
            if (!rating) {
                setRating(1);
            } else {
                e.preventDefault();
                setRating(rating < 5 ? rating + 1 : 5);
                ratingArrayRef.current[rating]?.focus();
            }
        }
        if (e.code == "ArrowLeft" || e.code == "ArrowDown") {
            e.preventDefault();
            setRating(rating > 1 ? rating - 1 : 1);
            ratingArrayRef.current[rating - 2]?.focus();
        }
    };

    return (<div ref={ref} className={cn(styles.ratingWrapper, {
        [styles.error]: error
    })} {...props}>
        {ratingArray.map((r, i) => (<span key={i}>{r}</span>))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
    </div>);
});