import React, { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import * as queries from '../graphql/queries';
import { getCurrentUser } from 'aws-amplify/auth';
import { generateClient } from 'aws-amplify/api';
import Post from './post/index';

const client = generateClient();

const Timeline = () => {
    const [photos, setPhotos] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { userId } = await getCurrentUser();

                const getUser = await client.graphql({
                    query: queries.getUser,
                    variables: { id: userId }
                });

                const userPhotos = getUser.data.getUser.items.avatar;
                setPhotos(userPhotos);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container col-span-2">
            {loading ? (
                <Skeleton count={1} width={640} height={400} className="mb-5"/>
            ) : photos?.length > 0 ? (
                photos.map((content) => (
                    <Post key={content.docId} content={content} />
                ))
            ) : (
                <p className="text-center text-2xl">
                    No Followers!
                </p>
            )}
        </div>
    );
};

export default Timeline;
